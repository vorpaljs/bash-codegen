#!/bin/bash

HELLO=WORLD;

echo "hello world";
# hey I am a comment
ls -la

if [ 1 ]
then
  echo "hello again world"
  echo "another hello!"
else
  echo "nope"
fi

if [ 1 ]
then
  echo "hello and that is it!"
fi

echo "$HELLO"

noop
