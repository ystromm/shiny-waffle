import { Auth, Interval, Runner, Source } from "./runner";

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


rl.on('line', function (stdInString: string) {
    const inputData = JSON.parse(stdInString) as InputData;
    const plugin = new Runner()

    var result = undefined;

    switch (inputData.command) {
        case "download": {
            if (typeof inputData.params !== "undefined") {
                result = plugin.download(inputData.params.source, inputData.params.auth, inputData.params.interval);
            }
            else {
                // boom
            }
            break;
        }
        default: {
            // boom
        }
    }


    //const result = { hej: "hej" };
    //const result = plugin.run(cmd_json.commands)
    process.stdout.write(JSON.stringify(result));
    rl.close();
});