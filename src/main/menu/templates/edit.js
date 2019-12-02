import * as actions from '../actions/edit'
import { isOsx } from '../../config'

export default function (keybindings, userPreference) {
  const { aidou } = userPreference.getAll()
  return {
    label: '&Edit',
    submenu: [{
      label: 'Undo',
      accelerator: keybindings.getAccelerator('edit.undo'),
      click: (menuItem, browserWindow) => {
        actions.edit(browserWindow, 'undo')
      }
    }, {
      label: 'Redo',
      accelerator: keybindings.getAccelerator('edit.redo'),
      click: (menuItem, browserWindow) => {
        actions.edit(browserWindow, 'redo')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      accelerator: keybindings.getAccelerator('edit.cut'),
      role: 'cut'
    }, {
      label: 'Copy',
      accelerator: keybindings.getAccelerator('edit.copy'),
      role: 'copy'
    }, {
      label: 'Paste',
      accelerator: keybindings.getAccelerator('edit.paste'),
      role: 'paste'
    }, {
      type: 'separator'
    }, {
      label: 'Copy as Markdown',
      accelerator: keybindings.getAccelerator('edit.copy-as-markdown'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'copyAsMarkdown')
      }
    }, {
      label: 'Copy as HTML',
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'copyAsHtml')
      }
    }, {
      label: 'Paste as Plain Text',
      accelerator: keybindings.getAccelerator('edit.copy-as-plaintext'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'pasteAsPlainText')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Select All',
      accelerator: keybindings.getAccelerator('edit.select-all'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'selectAll')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Duplicate',
      accelerator: keybindings.getAccelerator('edit.duplicate'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'duplicate')
      }
    }, {
      label: 'Create Paragraph',
      accelerator: keybindings.getAccelerator('edit.create-paragraph'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'createParagraph')
      }
    }, {
      label: 'Delete Paragraph',
      accelerator: keybindings.getAccelerator('edit.delete-paragraph'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'deleteParagraph')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Find',
      accelerator: keybindings.getAccelerator('edit.find'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'find')
      }
    }, {
      label: 'Find Next',
      accelerator: keybindings.getAccelerator('edit.find-next'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findNext')
      }
    }, {
      label: 'Find Previous',
      accelerator: keybindings.getAccelerator('edit.find-previous'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findPrev')
      }
    }, {
      label: 'Replace',
      accelerator: keybindings.getAccelerator('edit.replace'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'replace')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Find in Folder',
      accelerator: keybindings.getAccelerator('edit.find-in-folder'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findInFolder')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Aidou',
      visible: aidou,
      id: 'aidou',
      accelerator: keybindings.getAccelerator('edit.aidou'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'aidou')
      }
    }, {
      label: 'Screenshot',
      id: 'screenshot',
      visible: isOsx,
      accelerator: keybindings.getAccelerator('edit.screenshot'),
      click (menuItem, browserWindow) {
        actions.screenshot(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      // TODO: Remove this menu entry and add it to the command palette (#1408).
      label: 'Line Ending',
      submenu: [{
        id: 'crlfLineEndingMenuEntry',
        label: 'Carriage return and line feed (CRLF)',
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'crlf')
        }
      }, {
        id: 'lfLineEndingMenuEntry',
        label: 'Line feed (LF)',
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'lf')
        }
      }]
    }]
  }
}
