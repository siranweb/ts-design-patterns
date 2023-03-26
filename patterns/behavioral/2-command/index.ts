import { Button } from './buttons';
import { CopyCommand, CutCommand, PasteCommand } from './commands';
import { Editor } from './editor';

// https://refactoring.guru/design-patterns/command

const editor = new Editor();

const copyCommand = new CopyCommand(editor);
const cutCommand = new CutCommand(editor);
const pasteCommand = new PasteCommand(editor, 'To paste');

const copyButton = new Button();
const cutButton = new Button();
const pasteButton = new Button();

copyButton.setOnClick(copyCommand);
cutButton.setOnClick(cutCommand);
pasteButton.setOnClick(pasteCommand);