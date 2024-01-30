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

lineReader.eachLine(process.argv[2], function (line, last) {
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


    // console.log(tags);
    // console.log(tags[1]);
    // console.log(tags.input);

    // remove TAGS property from the original line
    let updatedLine = tagsProperty.input.replace(/[ ]*TAGS=".*"[ ]*/,'');
    updatedLine = updatedLine.replace('</A>',`${titleTags}</A>`);

    // place the tags into the title
    
    // console.log(updatedLine);
    return updatedLine;
}


