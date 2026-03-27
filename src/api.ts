export async function updateQuantity(newQuantity: number) {
    return new Promise((resolve) => {
      // Simulate a slow network request.
      setTimeout(() => {
        resolve(newQuantity);
      }, 2000);
    });
  }
  