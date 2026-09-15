/**
 * CONFIGURAÇÃO DO CATÁLOGO E WHATSAPP
 * 
 * O vendedor pode alterar facilmente o número de telefone e o nome da loja abaixo.
 */

// Formato internacional sem símbolos: DDI + DDD + NÚMERO (Exemplo Brasil: 5511999999999)
export const WHATSAPP_NUMBER = "5511999999999";

export const STORE_NAME = "Manto FC";

export const STORE_TAGLINE = "Camisas para quem vive o esporte.";

/**
 * Gera o link direto para o WhatsApp com mensagem personalizada
 */
export function getWhatsAppUrl(productName?: string, size?: string): string {
  let message = "";

  if (productName) {
    if (size) {
      message = `Olá! Vi a camisa ${productName} (Tamanho ${size}) no catálogo e gostaria de saber a disponibilidade e o valor.`;
    } else {
      message = `Olá! Vi a camisa ${productName} no catálogo e gostaria de saber a disponibilidade, tamanhos e valor.`;
    }
  } else {
    message = `Olá! Gostaria de consultar modelos e disponibilidade no catálogo da ${STORE_NAME}.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
