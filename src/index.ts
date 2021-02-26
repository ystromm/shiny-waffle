import {Auth, Interval, Runner, Source} from "./runner";

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

interface InputData {
    command: string,
    trace_id: string,
    params?: {
        source: Source,
        auth: Auth,
        interval: Interval,
    },
    job_id?: string,
    plugin_options?: {}
}


rl.on('line', function (line: string) {
    console.log(line);
    const inputData = JSON.parse(line) as InputData;
    const plugin = new Runner();

    var result = {};

    switch (inputData.command) {
        case "download": {
            if (typeof inputData.params !== "undefined") {
                result = plugin.download(inputData.params.source, inputData.params.auth, inputData.params.interval);
            } else {
                // boom
                result = {error: {type: "READ_ERROR", "message": "Missing params"}};
            }
            break;
        }
        default: {
            result = {error: {type: "READ_ERROR", "message": "Unknown command"}};
            break;
        }
    }


    //const result = { hej: "hej" };
    //const result = plugin.run(cmd_json.commands)
    process.stdout.write(JSON.stringify(result));
    rl.close();
});