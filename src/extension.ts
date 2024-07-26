import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyOpenTabs', async () => {
        try {
            const openTabs = vscode.workspace.textDocuments;
            const formattedContents = openTabs.map(doc => {
                const fileName = doc.fileName.split('\\').pop();
                const fileContent = doc.getText().replace(/"/g, '\\"');
                return `${fileName}: "${fileContent}"`;
            }).join(', ');

            await vscode.env.clipboard.writeText(formattedContents);
            vscode.window.showInformationMessage('Copied content of open tabs to clipboard!');
        } catch (error) {
            console.error('Error copying open tabs:', error);
            vscode.window.showErrorMessage('Failed to copy open tabs. Check console for details.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
