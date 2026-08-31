import { AppError } from '../middlewares/AppError';
import * as ministroRepository from '../repositories/ministroRepository';
import { CreateMinistroDTO, UpdateMinistroDTO } from '../types/ministro';

function validateId(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('Id inválido', 400);
  }
}

export function findAll() {
  return ministroRepository.findAll();
}

export function create(data: CreateMinistroDTO) {
  const nome = data.nome?.trim();

  if (!nome) {
    throw new AppError('Nome é obrigatório', 400);
  }

  return ministroRepository.create({
    ...data,
    nome,
  });
}

export async function findById(id: number) {
  validateId(id);

  const ministro = await ministroRepository.findById(id);

  if (!ministro) {
    throw new AppError('Ministro não encontrado', 404);
  }

  return ministro;
}

export async function update(id: number, data: UpdateMinistroDTO) {
  validateId(id);
  await findById(id);

  const hasAnyField =
    data.nome !== undefined ||
    data.telefone !== undefined ||
    data.funcao !== undefined ||
    data.ativo !== undefined;

  if (!hasAnyField) {
    throw new AppError('Envie ao menos um campo para atualizar', 400);
  }

  return ministroRepository.update(id, data);
}

export async function remove(id: number) {
  validateId(id);
  await findById(id);
  return ministroRepository.remove(id);
}