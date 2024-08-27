#!/usr/bin/env node
import { execSync } from 'child_process';
import { resolve } from 'path';

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

if (command === 'install' && component) {
  console.log(`Installing component: ${component}`);
  // For demonstration, you would add actual logic to handle component installation
  // Here, we just simulate the behavior with a console log
  console.log(`Component ${component} installed from react-rizz`);
} else {
  console.log('Usage: npx react-rizz add <ComponentName>');
}
