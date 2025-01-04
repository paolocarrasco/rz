const fs = require('fs');

const conventionalCommitMessageRegExp = /^(#\d+\s)?(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([\w\-.]+\))?(!)?: ([\w ])+([\s\S]*)/g;
const commitMsgFile = process.argv[2];
const message = fs.readFileSync(commitMsgFile, 'utf8');
const isValid = conventionalCommitMessageRegExp.test(message);

if(!isValid) {
  console.log(`Cannot commit: the commit message (${message}) does not comply with the commit policy of the repository.`);
  console.log('The policy considers: the issue number in Github and the Conventional Commit format.');
  console.log('Examples of valid commit messages: "#1 feat!: add new feature", "#1 fix: fix a bug", "#1 chore(npm): update dependencies"');
  console.log('For more information about the Conventional Commit format, please visit: https://www.conventionalcommits.org/en/v1.0.0/');
  console.log('Please, follow the commit policy and try again.');
}

process.exit(isValid ? 0 : 1);