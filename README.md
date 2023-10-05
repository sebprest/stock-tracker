# 📦 Stock Tracker

A CLI tool for tracking stock levels.

## 🛠 Build Instructions

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed
- Clone the repository to your local machine

```bash
git clone https://github.com/sebprest/stock-tracker.git
```

### Setting up the project

1. Navigate to the project directory:

```bash
cd stock-tracker
```

2. Install dependencies:

```bash
npm install
```

### Building the Application

1. Compile the application:

```bash
npm run build
```

2. Upon completion, the bundled output will be in the `dist` directory.

## 🚀 Usage

To set stock levels, use the `set-stock` command:

```bash
node stock-tracker.js set-stock <sku-id> <stock-level> <sku-id> <stock-level> <file-name.txt>
```

To add to existing stock levels, use the `add-stock` command:

```bash
node stock-tracker.js add-stock <sku-id> <stock-amount> <sku-id> <stock-amount> <file-name.txt>
```

To subtract from stock levels, use the `order` command:

```bash
node stock-tracker.js order <order-ref> <sku-id> <quantity> <sku-id> <quantity> <file-name.txt>
```

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.