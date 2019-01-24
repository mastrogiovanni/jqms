#!/bin/bash

docker run --rm -p 8080:3000 --name jqms -e "TARGET=https://4b578f22-82df-4100-b591-b9fa94062679.mock.pstmn.io" -e "EXPRESSION=.array,.object" jqms 



