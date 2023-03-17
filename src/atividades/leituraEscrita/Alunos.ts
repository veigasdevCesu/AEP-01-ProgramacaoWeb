import { alunos } from './alunosData'
import { writeFile, readFile } from 'fs/promises'


export class Alunos {
    private dataSource = alunos

    getAlunos() {
        return this.dataSource
    }

    writeAlunos() {
        writeFile('alunosDataSource.json', JSON.stringify(this.dataSource, null, 2))
    }

    async readAlunosDataSource() {
        const readAlunos = await readFile('alunosDataSource.json', "utf-8")

        return readAlunos
    }
}