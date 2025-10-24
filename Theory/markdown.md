# Flow 1
## Login
```mermaid
sequenceDiagram
    participant User as 🧑 User
    participant Nextcloud as ☁️ Nextcloud
    participant JFC as 🔐 JFC (Auth Server)

    User->>Nextcloud: Mở trang login của Nextcloud
    Nextcloud->>User: Hiển thị nút "Đăng nhập JFC"
    User->>Nextcloud: Ấn "Đăng nhập JFC"
    Nextcloud->>JFC: Redirect sang trang login của JFC (OIDC)
    alt JFC đã có session
        JFC-->>Nextcloud: Trả token (đã xác thực)
        Nextcloud->>Nextcloud: Xác thực thành công
        Nextcloud-->>User: Đăng nhập thành công
    else JFC chưa đăng nhập
        JFC->>User: Hiển thị form username/password
        User->>JFC: Nhập thông tin đăng nhập
        JFC->>JFC: Xác thực thông tin user
        JFC-->>Nextcloud: Trả token OIDC
        Nextcloud->>Nextcloud: Xác thực và tạo session
        Nextcloud-->>User: Đăng nhập thành công
    end

``` 

## Logout đồng bộ
```mermaid
sequenceDiagram
    participant User as 🧑 User
    participant Nextcloud as ☁️ Nextcloud
    participant JFC as 🔐 JFC

    User->>JFC: Logout JFC
    JFC->>Nextcloud: Gửi thông báo logout (OIDC Front/Back Channel)
    Nextcloud->>Nextcloud: Xóa session user
    Nextcloud-->>User: User bị logout khỏi Nextcloud
```

## Logout không đồng bộ
```mermaid
sequenceDiagram
    participant User as 🧑 User
    participant Nextcloud as ☁️ Nextcloud
    participant JFC as 🔐 JFC

    User->>JFC: Logout JFC
    JFC-->>Nextcloud: (Không gửi thông báo logout)
    Note over Nextcloud: Session Nextcloud vẫn còn hiệu lực
    User->>Nextcloud: Tiếp tục dùng bình thường

```

# Flow 2
## Login
```mermaid
sequenceDiagram
    participant User as 🧑 User
    participant Nextcloud as ☁️ Nextcloud
    participant JFC as 🔐 JFC (User DB)

    User->>Nextcloud: Nhập username/password (của JFC)
    Nextcloud->>JFC: Gửi request xác thực credential
    JFC-->>Nextcloud: Trả kết quả xác thực (success/fail)
    alt Success
        Nextcloud->>Nextcloud: Tạo session user
        Nextcloud-->>User: Đăng nhập thành công
    else Fail
        Nextcloud-->>User: Báo lỗi đăng nhập
    end
```

## Logout
```mermaid
sequenceDiagram
    participant User as 🧑 User
    participant Nextcloud as ☁️ Nextcloud
    participant JFC as 🔐 JFC

    User->>Nextcloud: Logout Nextcloud
    Nextcloud->>Nextcloud: Xóa session Nextcloud
    Note over JFC: Session JFC vẫn giữ nguyên

    User->>JFC: Logout JFC
    Note over Nextcloud: Session Nextcloud vẫn còn nếu chưa logout Nextcloud

```