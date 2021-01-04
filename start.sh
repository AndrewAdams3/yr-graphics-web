export IDP_DOMAIN=https://egp-dev.auth.us-west-2.amazoncognito.com
export USER_POOL_ID=us-west-2_FfUt6t2pW
export USER_POOL_CLIENT_ID=27bjcaqoebko8dq9cvvvbsuae1
export REDIRECT_SIGN_IN=http://localhost:3000/token
export REDIRECT_SIGN_OUT=http://localhost:3000/
export AUTH_COOKIE_DOMAIN=localhost
export region=us-west-2

docker build -t andrewadams3/egp-nextjs . \
  --build-arg IDP_DOMAIN \
  --build-arg USER_POOL_ID \
  --build-arg USER_POOL_CLIENT_ID \
  --build-arg REDIRECT_SIGN_IN \
  --build-arg REDIRECT_SIGN_OUT \
  --build-arg AUTH_COOKIE_DOMAIN \
  --build-arg region