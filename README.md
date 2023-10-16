# Mapil - Manage Your API Keys Easily

Mapil is a command-line tool built with Node.js, designed to simplify the management of your API keys. With Mapil, you can store, retrieve, update, and delete your API keys with ease, all from the command line. Whether you're a developer managing multiple API services or just someone who wants a convenient and secure way to handle API keys, Mapil has got you covered.

## Installation

To get started, make sure you have Node.js and npm installed on your system. Then, install Mapil globally using npm:

```bash
npm install -g mapil
```

## Usage

Mapil provides the following commands:

### 1. `mapil key add`

Use this command to add a new API key to your Mapil keyring. You will be prompted to enter the name and key.

```bash
mapil key add
```

### 2. `mapil key get`

Retrieve a specific API key from your Mapil keyring. You'll be presented with a list of API key names, and you can choose the one you want to retrieve.

```bash
mapil key get
```

### 3. `mapil key list`

List all the API keys currently stored in your Mapil keyring.

```bash
mapil key list
```

### 4. `mapil key upd`

Update an existing API key in your Mapil keyring. You'll be presented with a list of API key names, and you can choose the one you want to update.

```bash
mapil key upd
```

### 5. `mapil key del`

Delete an API key from your Mapil keyring. You'll be presented with a list of API key names, and you can choose the one you want to delete. You can also use the `-a` flag to delete all API keys.

```bash
mapil key del
mapil key del -a
```

## Example

```bash
$ mapil key add
? Enter a name for the API key: MyKey
? Enter the API key:
API key 'MyKey' successfully added to Mapil keyring.

$ mapil key list
MyKey: APIKey

$ mapil key get
? Choose an API key to retrieve: MyKey
MyKey: APIKey

$ mapil key upd
? Choose an API key to update: MyKey
? Enter the updated API key: NewAPIkey
API key 'MyKey' updated.

$ mapil key del
? Choose an API key to delete: MyKey
API key 'MyKey' deleted.

$ mapil key list
No API keys found.
```

Mapil simplifies API key management, making it easy and secure to handle your keys directly from the command line.
