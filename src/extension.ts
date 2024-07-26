import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyOpenTabs', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const openTabs = vscode.window.visibleTextEditors;
        let result = '';

        for (const tab of openTabs) {
            const document = tab.document;
            const fileName = document.fileName.split('/').pop();
            const fileContent = document.getText();
            result += `${fileName}:${fileContent}\n`;
        }

        await vscode.env.clipboard.writeText(result);
        vscode.window.showInformationMessage('Copied code from open tabs to clipboard');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
