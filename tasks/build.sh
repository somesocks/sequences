(find ./src -name *.js | sort -t/ -k2.2 -k2.1 | xargs jsdoc2md --separators --param-list-format list --property-list-format list --member-index-format list --template README.hbs --files) > README.md;
rsync --update --recursive --delete ./src/ ./dist;
cp ./.npmignore ./dist
cp ./package.json ./dist
cp ./README.md ./dist
cp ./LICENSE ./dist
