#!bin/bash

/bin/bash -ec "cd server && npm run dev &"
/bin/bash -ec "cd client && npm run dev"