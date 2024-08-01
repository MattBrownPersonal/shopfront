import apiClient from '../axios'
import type { ShopProduct } from '../interfaces/shopProduct.ts'
export const getProducts = async (): Promise<ShopProduct[]> => {
  const response = await apiClient.get<ShopProduct[]>('/products')
  return response.data
}

export const getProductsById = async (id: number): Promise<ShopProduct> => {
  const response = await apiClient.get<ShopProduct>(`/products/${id}`)
  return response.data
}

export const getCategories = async (): Promise<[]> => {
  const response = await apiClient.get<[]>('/products/categories')
  return response.data
}
