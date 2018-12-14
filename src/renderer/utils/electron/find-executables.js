import commandExists from 'command-exists';
import { isExecutable } from './is-executable';
import commonExecutables from '../../data/common-executables';
import logger from '../logger';
import { create } from './interface';

async function isExecutableOrCommand(path) {
  try {
    if (await commandExists(path)) {
      return true;
    }
  } catch (e) {
    logger.info(e);
  }

  return isExecutable(path);
}

export async function getExecutableInfo(exe) {
  logger.info(`testing path '${exe.path}'`);

  const result = {
    ...exe,
    isExecutable: false,
    ver: 'unknown version',
  };

  result.isExecutable = await isExecutableOrCommand(exe.path);

  if (result.isExecutable) {
    logger.info(`'${exe.path}' is executable`);

    try {
      const backend = create({
        ...exe,
        cwd: '/',
      });

      result.ver = await backend.getVersion();
    } catch (e) {
      logger.info(e);
      result.ver = 'unknown version';
    }
  } else {
    logger.info(`'${exe.path}' is NOT executable`);
  }

  return result;
}

export async function findExecutables() {
  const result = [];

  /* eslint-disable */

  for (const exe of commonExecutables) {
    const info = await getExecutableInfo(exe);

    if (info.isExecutable) {
      result.push(info);
    }
  }

  return result;
}