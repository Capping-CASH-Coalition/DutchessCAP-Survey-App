#!/bin/bash

cd AngularDevFolder
`ng build -env=prod`

cd ..
mv AngularDevFolder/dist ../client/

echo “Wait for 5 seconds”
sleep 5
echo “Completed”

#rm -rf client/*

