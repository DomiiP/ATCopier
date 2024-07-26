# ATCopier

## Overview

ATCopier is a Visual Studio Code extension that allows you to copy the code from all open tabs into your clipboard in a specified format.

## Features

- Copies the content of all open tabs.
- Formats the content as `fileName: {file content}`.

## Usage

1. Open some files in Visual Studio Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette.
3. Type "Copy Open Tabs" and select the command.
4. The code from all open tabs will be copied to your clipboard in the specified format.

## Installation

To install this extension:

1. Run `vsce package` to generate a `.vsix` file.
2. In Visual Studio Code, go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
3. Click on the three dots in the top right corner and select "Install from VSIX...".
4. Choose the generated `.vsix` file to install your extension.

## License

MIT
