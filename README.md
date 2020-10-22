# downloading redis mac/linux
https://redis.io/download
- cd to download dirctory
- `make`
- `./src/redis-server`
# Redis windows:
- For windows : https://github.com/dmajkic/redis/downloads

# Redis basics
- https://github.com/NodeRedis/node_redis
- In-memory key value store
- Has basic atomic operations + other cool features
- https://redis.io/commands
- Used for syncing variables across instances, caching and broadcasting updates

# Testing redis cli
- Start from same directory as redis server
- `./src/redis-cli`
- View commands here: https://redis.io/commands
- View all keys with `KEYS *`
- Try to view a key with `GET myKey`
- Try delete `DEL myKey`