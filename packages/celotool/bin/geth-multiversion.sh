#!/bin/sh

export NETWORK=gethmultiversion

# geth v1.0.0
export BASE_GETH=8a44c2cd92200bdffce595c7558e84a39ea2bc15
export MASTER_GETH=$(curl -s https://api.github.com/repos/celo-org/celo-blockchain/commits/master | jq -r .sha)

cp env.template ../../.env.$NETWORK
sed -i s/___GETHMASTER___/$MASTER_GETH/g ../../.env.$NETWORK
sed -i s/___GETHSTABLE___/$BASE_GETH/g ../../.env.$NETWORK

./bin/celotooljs.sh deploy initial testnet -e $NETWORK

kubectl config set-context --current --namespace $NETWORK
kubectl get pods

# wait 10 minutes
sleep 600

export WEB3="http://$(kubectl get services ${NETWORK}-service-0-tcp -o=json | jq -r .spec.loadBalancerIP):8545"
echo $WEB3

ts-node src/health-check.ts

./bin/celotooljs.sh deploy destroy testnet -e $NETWORK
