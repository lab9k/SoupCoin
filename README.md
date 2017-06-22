# Embark demo setup

## Windows

1. install nodejs v8.1.2: [link](https://nodejs.org/en/)

1. install windows-build-tools (only on windows)

        $ npm install -g --production windows-build-tools

1. install embark-framework

        $ npm install -g embark
        # We need embark version 2.4.3, at the time of writing, the production version is 2.4.2, so to correctly install embark, usethe following command
        $ npm install -g git+https://github.com/iurimatias/embark-framework.git#develop

        # If you plan to use the simulator instead of a real ethereum node.
        $ npm -g install ethereumjs-testrpc

1. clone the repository

        $ mkdir <project-name>
        $ cd <project-name>
        $ git clone https://github.com/lab9k/SoupCoin.git
        $ cd SoupCoin/embark_demo

1. run the development server

        $ embark blockchain
        # or
        $ embark simulator
    open another terminal instance and run:

        $ embark run

## Linux

* similar to windows installation, with some extra steps when installing embark

    a detailed description can be found [here](https://github.com/iurimatias/embark-framework/wiki/Install-on-Linux)

## OSX

* similar to windows installation, with some extra steps when installing embark

    a detailed description can be found [here](https://github.com/iurimatias/embark-framework/wiki/Install-on-OSX)
