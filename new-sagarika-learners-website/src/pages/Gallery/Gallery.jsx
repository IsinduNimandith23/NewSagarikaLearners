import React from "react";
import styles from "./Gallery.module.css";
import homepage from "../../assets/homepage.jpg";
// Import your images here

const Gallery = () => {
  return (
    <div className={styles.gallery_section}>
        <div className={styles.gallery_container}>
            <img src={homepage} alt="Image 1" className={styles.gallery_img}/>
            <p className={styles.gallery_title}>See our Events</p>
            <h1 className={styles.gallery_heading}>Gallery</h1>
        </div>
    <div className={styles.gallery}>
      <div className={styles.imageGrid}>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 2" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 3" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 2" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 3" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 2" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 3" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 2" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 3" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 2" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 3" />
        </div>
        <div className={styles.imageItem}>
          <img src={homepage} alt="Image 1" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
