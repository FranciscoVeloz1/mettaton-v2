import { program } from "commander";
import { readFile } from "../actions";

program.version("0.0.1").description("Mettaton compiler");

program
  .command("mettaton <file>")
  .description("Compile the file")
  .action(readFile);

program.parse(process.argv);
