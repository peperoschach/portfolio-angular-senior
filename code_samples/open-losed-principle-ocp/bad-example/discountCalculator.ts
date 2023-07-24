/**
Neste código de "mau exemplo" em TypeScript, temos a classe DiscountCalculator com o 
método calculateDiscount, que recebe um objeto Order e um discountType como parâmetros 
e calcula o desconto com base no tipo fornecido. Se o discountType for "percent", ele 
retorna 10% do total do pedido. Se for "fixed", retorna um desconto fixo de 50. Esse código 
é um "mau exemplo" porque a lógica de cálculo de desconto está diretamente na classe 
DiscountCalculator, o que pode tornar difícil a manutenção e extensão do código conforme 
novos tipos de desconto são adicionados.

*/
class DiscountCalculator {
  calculateDiscount(order: Order, discountType: string): number | undefined {
    if (discountType === 'percent') {
      return order.total * 0.1;
    } else if (discountType === 'fixed') {
      return 50;
    } else {
      return undefined;
    }
  }
}

interface Order {
  total: number;
}

