'use client'
import { useState } from "react"


export function LikeButton({ id }) {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)

    const handleLikeClick = () => {
        setLike(!like);
        setCount(count + (like ? -1 : 1)); // Incrementa o decrementa el contador según el estado actual de 'like'
    };

  return (
    <button onClick={handleLikeClick}> {like ? '❤️' : '💔' } {count}</button>
  )
}