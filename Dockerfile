# Temporary image to build application (for make final docker more lightweight)
FROM alpine:3.11 as builder 
# Install dependencies needed for build
RUN apk --no-cache add gcc g++ make python nodejs npm
# Other command will run in /julienkeiff.fr
WORKDIR /julienkeiff.fr
# Copy package-lock and package.json inside the docker
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
# Install dependencies of package.json
RUN npm ci
# Copy all files inside docker
COPY . .
# Build application 
RUN npm run build


# Now build the final image
FROM alpine:3.11
# Add dependency needed to run app
RUN apk --no-cache add nodejs npm
# Other command will run in /julienkeiff.fr
WORKDIR /julienkeiff.fr
# Create a folder for front
RUN mkdir /julienkeiff.fr/dist
# Copy the front build in the builder image
COPY --from=builder /julienkeiff.fr/dist ./dist
# Install express
RUN npm i express
# Copy the server file inside this docker
COPY --from=builder /julienkeiff.fr/server.js .
# When docker start it launch this command
CMD ["node", "server"]