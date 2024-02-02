#! /usr/bin/env node
const { createWriteStream, existsSync, unlinkSync } = require('fs');
const lineReader = require('line-reader');
const path = require('node:path');
const inputFilePath = process.argv[2];

if (inputFilePath === undefined) {
    console.log('provide file as (one and only) argument, e.g. bookmarks.html');
    process.exit(1);
}

if (!existsSync(inputFilePath)) {
    console.log(`file '${process.argv[2]}' does not exist.`);
    process.exit(1);
}

const fileDirName = path.dirname(inputFilePath);
const fileBaseName = path.basename(inputFilePath);

const outputFilePath = `${fileDirName}/TRANSFORMED_${fileBaseName}`;

// Delete output file if it already exists.
try {
    unlinkSync(outputFilePath);
}
catch {
}

const outputFile = createWriteStream(outputFilePath, { flags: 'a' });

console.log('removing tags from link element "TAGS" (bookmarks "tags" unique to Firefox desktop versions) attribute converting/placing into link element title (bookmark title - universal amongst browsers)');

await lineReader.eachLine(process.argv[2], function (line, last) {
    const tagsProperty = line.match(/TAGS="(.*)"/);
    if (tagsProperty === null) {
        outputFile.write(line);
    }
    else {
        outputFile.write(transformTags(tagsProperty));
    }

    if (!last) {
        outputFile.write('\n');
    }
});

console.log('output:');
console.log(outputFilePath);

function transformTags(tagsProperty) {
    // tags value
    let tags = tagsProperty[1].split(',');
    tags = tags.map((s)=> { 
        return `#${s.trim()}`;
    });

    let titleTags = ' | ';

    for(const tag of tags) {
        titleTags += `${tag} `;
    }

    titleTags = titleTags.trimEnd();


    // remove TAGS property from the original line
    let updatedLine = tagsProperty.input.replace(/[ ]*TAGS=".*"[ ]*/,'');
    updatedLine = updatedLine.replace('</A>',`${titleTags}</A>`);

    return updatedLine;
}


