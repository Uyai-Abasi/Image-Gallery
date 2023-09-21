  import React,{useEffect,useState,useRef} from 'react'
  import { Card,Stack,Grid,Typography,Paper ,Box,Skeleton} from '@mui/material'
  import Sortable from 'sortablejs';

  import img from '../image/prayer.jpg'
  import img1 from '../image/fitness.jpg'
  import img2 from '../image/fright.jpg'
  import img3 from '../image/yoga.jpg'
  import img4 from '../image/istockphoto-1276580714-612x612.jpg'
  import img5 from '../image/istockphoto-1288932916-612x612.jpg'
  import img6 from '../image/istockphoto-1391546306-612x612.jpg'
  import img7 from '../image/istockphoto-1395938896-612x612.jpg'
  import img8 from '../image/istockphoto-1432981535-612x612.jpg'
  import img9 from '../image/istockphoto-1450288136-612x612.jpg'
  import img10 from '../image/istockphoto-1453311423-612x612.jpg'
  import img11 from '../image/istockphoto-1472507642-612x612.jpg'
  import img12 from '../image/istockphoto-1481468103-612x612.jpg'
  import img13 from '../image/istockphoto-1483060668-612x612.jpg'
  import img14 from '../image/istockphoto-1484739997-612x612.jpg'
  import img16 from '../image/food.jpg'
  import img17 from '../image/fr.jpg'
  import img18 from '../image/fruit.jpg'
  import img15 from '../image/istockphoto-1530497500-612x612.jpg'
  import AppBar from './appbar'
  import Image from 'next/image'
  import { Search } from './appbar'
  const images = [
      {
        id: 1,
        img: img,
        tag: 'People',
      },
      {
        id: 2,
        img: img2,
        tag: 'Tech',
      },
      {
          id: 3,
          img: img3,
          tag: 'Yoga',
        },
        {
          id: 4,
          img: img4,
          tag: 'Art',
        },
        {
          id: 5,
          img: img5,
          tag: 'Family',
        },
        {
          id: 6,
          img: img16,
          tag: 'Food',
        },
        {
          id: 18,
          img: img6,
          tag: 'Chess',
        },
        {
          id: 7,
          img: img7,
          tag: 'Chess',
        },
        {
          id: 8,
          img: img8,
          tag: 'People',
        },  {
          id: 9,
          img: img9,
          tag: 'Family',
        },  {
          id: 10,
          img: img10,
          tag: 'Tech',
        },  {
          id: 11,
          img: img11,
          tag: 'Art',
        },
        {
          id: 12,
          img: img12,
          tag: 'Art',
        }, {
          id: 13,
          img: img13,
          tag: 'Tech',
        }, {
          id: 14,
          img: img14,
          tag: 'Chess',
        }, {
          id: 15,
          img: img15,
          tag: 'Family',
        },
        {
          id: 16,
          img: img17,
          tag: 'Vegies',
        },
        {
          id: 17,
          img: img18,
          tag: 'Food',
        },
    
    ];
  export default function ImageGallery({ searchQuery }) {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [imageData, setImageData] = useState(images); 
    const [draggedImage, setDraggedImage] = useState(null);
    const gridContainerRef = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        setImagesLoaded(true);
      }, 1000);
    }, []);
    useEffect(() => {
      if (searchQuery.trim() === '') {
        setImageData(images);
      } else {
        const filtered = images.filter((image) =>
          image.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setImageData(filtered);
      }
    }, [searchQuery]);
  
  
  
    const handleDragStart = (e, image) => {
      setDraggedImage(image);
      console.log(`Drag started for image with ID ${image.id}`);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e, targetImage) => {
      e.preventDefault();

      if (!draggedImage || draggedImage.id === targetImage.id) {
        return;
      }

      const updatedImages = imageData.map((img) => {
        if (img.id === draggedImage.id) {
          return targetImage;
        } else if (img.id === targetImage.id) {
          return draggedImage;
        }
        return img;
      });

      setImageData(updatedImages);
      setDraggedImage(null);
      console.log(`Dropped image with ID ${draggedImage.id} onto image with ID ${targetImage.id}`);
    };

    const handleTouchStart = (e, image) => {
      e.preventDefault();
      setDraggedImage(image);
      console.log(`Touch started for image with ID ${image.id}`);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e, targetImage) => {
      e.preventDefault();

      if (!draggedImage || draggedImage.id === targetImage.id) {
        return;
      }

      const updatedImages = imageData.map((img) => {
        if (img.id === draggedImage.id) {
          return targetImage;
        } else if (img.id === targetImage.id) {
          return draggedImage;
        }
        return img;
      });

      setImageData(updatedImages);
      setDraggedImage(null);
      console.log(`Dropped image with ID ${draggedImage.id} onto image with ID ${targetImage.id}`);
    };

    useEffect(() => {
      const gridContainer = gridContainerRef.current;
   
        new Sortable(gridContainer, {
          animation: 150,
          onEnd: (e) => {
         
            const { oldIndex, newIndex } = e;
           
          },
        });
   
    
    }, []);
    return (
      <div style={{ overflowY: 'scroll', height: '100vh' }}>
  <Grid container spacing={2} rowSpacing={5} columnSpacing={5} ref={gridContainerRef} sx={{padding:'32px',marginTop:"10px"}} >
        {imageData.map((image) => (
          <Grid
            item
            key={image.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}

          >
            <div
            style={{cursor:'move'}}
            draggable
           
              onTouchStart={(e) => handleTouchStart(e, image)}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, image)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, image)}
              onDragStart={(e) => handleDragStart(e, image)}
            >
            <Card
            sx={{
                background: '#FFFFF',
                border: '1.2px solid #DADDDB',
                borderRadius: '8px',
                px: '3px',
                position: 'relative',
                transform: draggedImage === image ? 'scale(1.05)' : 'scale(1)', 
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              {imagesLoaded ? (
                <Box height="200px" position="relative" sx={{ objectFit: 'cover', margin: '5px' }}>
                  <Image src={image.img} layout="fill" objectFit="cover" alt="project_card" />
                </Box>
              ) : (
                <Skeleton variant="rectangular" width={500} height={200} />
              )}
              <Typography variant="h6">{image.tag}</Typography>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
        </div>
    )
  }
