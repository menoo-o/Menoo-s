'use client'

import './blog.css'

export default function BlogsPage() {
  return (
    <div className="blog-container">
     
      <h2 className="blog-subtitle">Posting my work soon...</h2>
      <p className="blog-text">
        Yep, that's right. I’m really working hard on it. No, really. It's coming. I promise.
      </p>
      <p className="blog-text">
        <span className="bold-text">Hold your horses:</span> You know how it goes. Life is busy. I have other important things to do. Like... breathe.
      </p>
      <p className="blog-text">
        But hey, thanks for waiting. I’ll totally get it together soon. Just not today, or tomorrow, but... soon enough.
      </p>
      <p className="blog-footer">
        <span role="img" aria-label="pencil">✏️</span> Stay tuned for something incredible, whenever I get around to it.
      </p>
    </div>
  )
}
