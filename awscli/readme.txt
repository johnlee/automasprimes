
// Push docker image to ECR

1. Retrieve the login command to use to authenticate your Docker client to your registry.
Use the AWS CLI:
$(aws ecr get-login --no-include-email --region us-west-2)

Note: If you receive an "Unknown options: --no-include-email" error when using the AWS CLI, ensure that you have the latest version installed.

2. Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:
docker build -t automusprimes .

3. After the build completes, tag your image so you can push the image to this repository:
docker tag automusprimes:latest 251388864109.dkr.ecr.us-west-2.amazonaws.com/automusprimes:latest

4. Run the following command to push this image to your newly created AWS repository:
docker push 251388864109.dkr.ecr.us-west-2.amazonaws.com/automusprimes:latest

