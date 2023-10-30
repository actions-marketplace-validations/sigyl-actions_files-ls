import { promises as fs } from 'fs';
import path from 'path'
import core from '@actions/core';

const regex = new RegExp(
  core.getInput('regex') || '.',
)
const directory = core.getInput('path') || '.'

fs.readdir(
  directory,
).then(
  (files) => {
    core.setOutput(
      'files',
      JSON.stringify(
        files
          .filter(
            (file) => file.match(regex)
          ).map(
            (file) => path.join(
              directory,
              file,
            ),
          ),
      ),
    )
  }
);
