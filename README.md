# Exchange App UI

## Project Tools

This project was bootstrapped with

- React(Typescript]
- Sass (BEM)
- Context (State Management)
- SWR (for data fetching)
- React Toastify (for notification)
- React Hook Form (Validation)
- Dayjs (For date manipulation)
- Material UI (For UI components)
- Tailwind (Custom CSS styling)
- Socket.io (for streaming data -> prices)

## Project Installation

1.  Ensure you have node installed on your system
2.  Clone the repository by running
    ```
    git clone https://github.com/YomiCasual/exchange-app-ui.git
    ```
3.  At the root folder run, open the terminal and run:
    ```
    yarn install
    ```
4.  At the root folder run, open the terminal and run:
    ```
    yarn install
    ```
5.  Make sure your API_BASE_URL is the same port your server is running, you can change it in '/libs/index.ts'

6.  Wait for it to install and run:
    ```
    yarn  start
    ```
7.  Wait for the app to build and go to localhost:3000 or the port shown from the terminal

## Assumptions/Features added

1. Added Excahnge Form
2. The exchange button is disabled until the right paramaters are added
3. The exchange is made by fetching live prices and doing the appropriate conversion
4. The application is responsive
5. Filtering is added to the history table and ability to clear filter
6. Table can be customized to include number of data to display, sorting and, comparing or deleting columns
7. Live prices are being streamed

## Requirements Not Covered

All Necessary requirements were met according to the documents

## Issues faced

No issue faced

## Thank You
