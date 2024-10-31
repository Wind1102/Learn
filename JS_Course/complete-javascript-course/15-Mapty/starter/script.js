'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class Workout {
  date = new Date();
  id = Date.now()+'';
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //km
    this.duration = duration; // minute
    
  }

  _setDescription(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }

  click(){
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = (this.duration / this.distance).toFixed(2); // min/km
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km / h
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    this._getLocalStorage();

    this._getPosition();

  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      error => {
        console.log(error);
      }
    );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(work => this._renderWorkoutMarker(work))
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(ev) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp)) && inputs.every(inp => inp > 0);
    ev.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;
    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    // if workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // check if data is valid
      if (!validInputs(distance, duration, cadence))
        return alert('Input is invalid');

      workout = new Running([lat, lng], distance, duration, cadence);
    } else {
      // if workout cycling, create cycling object
      const elevationGain = +inputElevation.value;
      if (!validInputs(distance, duration, elevationGain))
        return alert('Input is invalid');
      workout = new Cycling(
        [lat, lng],
        distance,
        duration,
        elevationGain
      );
    }
    // add new object to workout array
    this.#workouts.push(workout);
    // render Workout on map as marker
    this._renderWorkoutMarker(workout);

    // hide form + clear input fields
    
    // form.classList.add('hidden');
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  _hideForm(){
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          keepInView: false,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type === 'running'?'🏃‍♂️':'🚴'} ${workout.distance}`)
      .openPopup();
  }

  _renderWorkout(workout){
    const html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running'?'🏃‍♂️':'🚴'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.type == 'running'?workout.pace:workout.speed}</span>
            <span class="workout__unit">${workout.type == 'running'?'min/km':'km/h'}</span>
          </div>
        </li>
    `
    form.insertAdjacentHTML('afterend',html);
  }

  _moveToPopup(ev){
    const workoutEl = ev.target.closest('.workout')
    if(!workoutEl) return;

    const workout = this.#workouts.find((val) => val.id === workoutEl.dataset.id)
    console.log(workout);
    this.#map.setView(workout.coords,13,{
        animate: true,
        pan: {
            duration: 1
        }
    });
    workout.click();
    // this.renderWorkoutMarker(workout);
  }

  _setLocalStorage(){
    localStorage.setItem('workouts', JSON.stringify(this.#workouts))
  }

  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;
    data.forEach(workout => {
        this._renderWorkout(workout);

    });
  }

  reset(){
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
