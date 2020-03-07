# Docker
Notes about docker

SSH into a running container

```bash
docker exec -it <container name> /bin/bash 
```
 
To build the image run
```bash
docker build . -t <image-name>
```

To load the image run
```bash
docker load < <image-file>
```

Run container:
```bash
docker run --name <container name> -p 8080:8080
```
Connect to network
```bash
docker network connect --alias <alias-name> <network-name> <container-name>
```

Wildfly configuration with debug and page editing
```bash
docker run --name wildfly --network local --network-alias wildfly -p 8080:8080 -p 9990:9990 -p 8787:8787 -v ~/docker/wildfly/deployment:/opt/jboss/wildfly/standalone/tmp -it jboss/wildfly:10.0.0.Final /opt/jboss/wildfly/bin/standalone.sh --debug -b 0.0.0.0 -bmanagement 0.0.0.0
```

Save container to file

```bash
docker save container > container.tar
``` 

Save load container from file

```bash
docker load < container.tar
``` 
