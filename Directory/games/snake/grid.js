export function randGridPos() {
  return {
    x: Math.floor(Math.random() * 25) + 1,
    y: Math.floor(Math.random() * 25) + 1,
  };
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 25 || position.y < 1 || position.y > 25
    )
}