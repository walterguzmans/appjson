import { Grupo } from "./grupo"

export interface Estudiante {
    id: number
    nombre: string
    correo: string
    gitHub: string
    grupo: Grupo
    carne: string
}
