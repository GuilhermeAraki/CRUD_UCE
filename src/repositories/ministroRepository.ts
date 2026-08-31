import { prisma } from '../config/prisma';
import { CreateMinistroDTO, UpdateMinistroDTO } from '../types/ministro';

export function findAll() {
  return prisma.ministro.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export function findById(id: number) {
  return prisma.ministro.findUnique({
    where: { id },
  });
}

export function create(data: CreateMinistroDTO) {
  return prisma.ministro.create({
    data,
  });
}

export function update(id: number, data: UpdateMinistroDTO) {
  return prisma.ministro.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.ministro.delete({
    where: { id },
  });
}