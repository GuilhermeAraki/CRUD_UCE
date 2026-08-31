import { Request, Response } from 'express';
import * as ministroService from '../services/ministroService';

export async function list(_req: Request, res: Response) {
  const ministros = await ministroService.findAll();
  return res.json(ministros);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const ministro = await ministroService.findById(id);
  return res.json(ministro);
}

export async function create(req: Request, res: Response) {
  const ministro = await ministroService.create(req.body);
  return res.status(201).json(ministro);
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  const ministro = await ministroService.update(id, req.body);
  return res.json(ministro);
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);
  await ministroService.remove(id);
  return res.status(204).send();
}