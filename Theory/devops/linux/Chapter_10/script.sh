#!/bin/sh

NAME="Hieu"

cat << EOF
Hello $NAME
EOF
# Output: Hello Hieu

cat << 'EOF'
Hello $NAME
EOF