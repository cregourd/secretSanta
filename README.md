Secret Santa

This is a simple Secret Santa program that takes a list of names and randomly assigns each person a Secret Santa. The program will then send an email to each person with the name of the person they are buying a gift for.

## Installation

1. Clone the repository

```bash
git clone git@github.com:cregourd/secretSanta.git
```

2. Install the required packages

```bash
yarn install
```

3. Create a `.env` file in the root of the project and add the following environment variables:

```bash
MAIL_ADDRESS=mail@mail.com
MAIL_APPLICATION_PASSWORD=application_password
MAIL_SERVICE=service
```

You can find an example of how to set up a Gmail account to send emails [here](https://nodemailer.com/usage/using-gmail/).

4. Add settings the the configuration as needed. You can find the configuration file in `settings-example.ts`.

5. Generate the Secret Santa assignments by running the method `Santa.assign`

6. Display the Secret Santa assignments by running the method `Santa.show`

7. Finally, send the emails by running the method `Santa.notifyAll`

## Usage

```bash
yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)