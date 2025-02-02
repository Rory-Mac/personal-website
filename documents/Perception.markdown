---
layout: narrow
title: Perception
---
<h4>Overview</h4> 
<p>Perceptual modalities produce perceptual spaces. The interoperation of these spaces produces perception. Modalities include vision,
proprioception, equilibrioception, audition, somatosensation, chemoreception, etc. The notion of objects and distance between objects
in a perceptual modality produces a perceptual space. In visual perception objects exist as groups of gradients in color space and 
distance as the degree of gradation between them. In proprioception and equilibrioception, objects exist as groups of points in
space that resist force and distance as the degree of exertion required for resistance against exertion to occur. In somatosensation,
objects exist as enclosed surfaces and distance as degree of slippage across and between these surfaces. In auditory perception,
objects exist as groups of frequencies and distance as difference in the properties of frequencies within and between groups. 
Chemoreception is less intuitively obvious, but still we can imagine objects as groups of primary properties such as tastes, odors,
physiological states, etc., and distance as the cardinality of the disjunction of these groups.</p>
<p>Perception can be overlayed with additional perceptual spaces that do not exist in the absence of these primary modalities.
Emotion exists as one such perceptual overlay equivalent to the attribution of perception with desire. Strategy exists as another such
perceptual overlay equivalent to the attribution of perception with action.</p>
<h4>Visual Perception</h4>
<p>Let us start with visual perception. Visual perception exists as the aggregate of perceived red, green, and blue light. These are the
primary colors. We can visualise transitions between the absence of light (black) and the presence of these primary colors as movement
through color space. Combined movement of these primary colors gives the secondary colors: magenta (red and blue), cyan (green and blue) 
and yellow (green and red). Combined movement of a primary color and a secondary color for which that primary color is not a component 
gives white (the presence of all colors in equal portion). Thus, we can encode color space spatially as a 3-dimensional cube, with black as the origin, white as the opposing vertex, primary colors as vertices of unit distance from black
and secondary colors as vertices of unit distance from white. Alternatively, we can leave this encoding aside and move through color space
perceptually without a spatial encoding.</p>
<p><img src="/Assets/images/color_traversal.png" width="100%" height="100%"></p>
<p>Our spatial encoding of color space has resolution one, with points at each unit distance (vertices). Color space at higher resolution
allows for partial movements. At resolution two, the notion of saturation emerges as the length of the shortest path to a given color, and
brightness if the color in question is white or black. Tertiary colors also emerge at resolution two as combined distinct movements between
distinct primary colors. We could, if we so desired, define quarternary, quinary, etc., colors as colors introduced at incrementally higher
resolutions of color space that are not pre-existing vertices with altered brightness and saturation.</p>
<p><img src="/Assets/images/color_mixing.png" width="100%" height="100%"></p>
<p>A color prism can be constructed for any subset of colors in color space. This prism represents the harmony of those colors at a 
resolution equal to resolution of the color space the prism is formed within. Additionally, a ring exists in color space at all 
resolutions and is formed between all primary and secondary colors one color movement apart. This ring contains all primary, secondary,
tertiary, etc., colors for which color harmonies in their most saturated form can be identified.</p>
<p><img src="/Assets/images/after_image.png" width="70%" height="70%"></p>
<p>Visual Perception exhibits both immediate and gradual decay. The dissapearance of an object that highly contrasts its surrounding
environment leaves a momentary imprint that fades within milliseconds. An after-image that decays at a slower rate can be observed in the
absence of further visual input. The rate of decay of the after-image of a visual input appears to be proportional to the duration and
intensity gradient of the visual input that produced it. This after-image is perceived as the gradient map of the visual input with respect
to color and intensity. Movement or deformation of a visual input in the visual field imprints as singular inputs produced at the rate of
visual perception.</p>
<p><img src="/Assets/images/sensory_memory.png" width="70%" height="70%"></p>
<p>Further information processing takes a filtered form of this gradient map as input. A momentary burst of objects in the visual field
yields an equivalent trace that can be grouped and counted to an upwards of four groups of four objects. Larger groups are chunked,
five to three and two, seven to four and three, etc. An additional momentary flash across the visual field has no effect, however an
additional burst of objects in the visual field resets the grouping process, and thus only an upwards of two groups of two objects can be 
recalled from the initial burst.</p>
<p>Additional emergent properties of vision include reification, multistability, invariance and grouping. Reification is the inference
of boundaries that are not visibly perceived. Multistability describes the perceptual oscillation between multiple and individual
interpretations of a visual stimulus. Invariance is the perception of a singular object under
transformation (i.e. spatial translation, rotation, reflection, scale and elastic deformation). Grouping is the perception of common
properties across objects in the visual field (i.e., proximity, symmetry, continuity/closure, common fate, etc.).</p>
<h4>Proprioception</h4>
<p>Proprioception is perception of position and movement. Flexion and extension of voluntarily-controlled muscle groups create movement of a
joint. All muscle groups allow for some degree of frontal, sagittal and transverse movement (forward/back, left/right, rotational) except 
for the elbows and knees which as hinge joints allow for frontal movement only. The vertebrae of the spine can be grouped into the cervical,
thoracic, and lumbar regions of the spine with corresponding muscle groups that allow for their voluntary control. Below (1.) is a 
diagrammatic representation of such movement. The larger circle encodes the muscle group responsible for frontal and sagittal movement,
and the smaller circle for transverse movmement. The corresponding rings encode the flexion and extension of these muscle groups.
The position of a joint exists as some combination of these six primitives of movement.</p>
<p><img src="/Assets/images/proprioception.png" width="100%" height="100%"></p>
<p>Some combination of movements adjacent to that position (left if position right, right if position left, etc.) will move the joint from
its current position to this next position. This can be visualised as a cubic graph with vertices encoding positions and edges encoding 
movements. The layering of these cubic graphs encodes the combined movement of these joints. The combined movement of two joints may or may
not sit on the shortest structurally connected path to the centre of mass (the lumbar region) shown by the distinction of (2.) and (3.).
Some subset of joints will be grounded, and thus experience a normal force against them. All joints along the shortest path from a grounded 
joint to the centre of mass will exchange energy through movement with the ground. Additionally, movement that is simultaneous and opposite
creates tension along a given path (simultaneous left/right, forward/back, or in/out movement).</p>
<h4>Equilibrioception</h4>
<p>Equilibrioception is the perception of balance and spatial orientation. These properties are perceived through the vestibular system,
with one's centre of orientation existing at the base of the skull. Consider that for any random spatial alignment of joints it is the
orientation of the base of the skull that is intuiviely considered as one's spatial orientation. The properties of proprioception discussed
above (position, motion, velocity and force) exist within an internal frame of reference. Equilibrioception provides an equivalent external
frame of reference. Consider that we still perceive the motion of a moving body attached to ourselves despite ourselves being at rest.</p>
<h4>Auditory Perception</h4>
<p>Auditory Perception is the perception of sound, which exists as the result of the complex combination of base frequencies. The 
fundamental frequency of a vibrating string is inversely proportional to its length. The frequencies we can perceive lie approximately
between 20-20000 cycles per second. Frequency corresponds to the sensory experience of pitch, and amplitude to volume. Our perception of 
sound is logarithmically weighted. A sound becomes twice as loud when amplitude is increased by an order of magnitude, and a sound
retains the same pitch class when frequency is doubled. We term the exponential multiples of two of a frequency as the octaves of that 
frequency. The octaves can be thought of as a subset of the harmonic series: the set of frequencies that exist as integer multiples of some
fundamental frequency. Addition of frequencies create constructive and destructive interference. Modulation of frequencies occurs through
one frequency acting as the envelope for another (modulating either amplitude or frequency). Timbre exists as the unique tonal quality of 
a sound and exists as the complex result of the addition and modulation of a set of fundamental frequencies. This can be shown through
a spectrogram, a visualisation of the amplitude of all frequencies in the audible range across time.</p>
<p><img src="/Assets/images/audition.png" width="100%" height="100%"></p>
<p>We can generate a set of pitch ratios through combination of the partial set of the harmonics and subharmonics of any given pitch. 
The simpler pitch ratios that fall within the octave of that pitch are kept (e.g. 9/5, 10/9, 25/16 in the case of generation from
five harmonics). Five harmonics is the most practically useful, seeing as four harmonics generate four pitch ratios within the octave 
and seven harmonics generate thirty-eight. This tunes our octave perfectly with respect to a tonal root (the pitch selected as the 1:1 ratio
from which all other ratios are generated). This does mean that identical intervals between notes are not equivalent in terms of pitch. 
Thus, the system is out-of-tune with respect to these pitch ratios for any other tonal root. Chromaticism defines twelve pitch ratios within
the octave as twelve increments of the twelfth root of two. This approximates a system that is in tune no matter the tonal root. 
From these simple heuristics harmonic complexity emerges in the form of chords, scales, rhythm, polyrhythm, etc.</p>
<h4>Somatosensation & Nociception</h4>
<p>Somatosensation is the perception of touch, which can be further subdivided into the perception of light touch, pressure, vibration,
tension and temperature. Two-point discrimination quantifies the disparate resolution of somatosensation across space. Two sharp points
are gently pressed against a somatosensory surface at distance great enough for the two points of contact to be perceied as distinct. This
distance is reduced until only a singular point of contact is perceived. The lips, fingers and feet have the highest two-point discrimination,
allowing for the topology of contact surfaces to be detected through deep static touch. Other aspects of somatosensation, namely vibration,
texture (roughness or softness of contact surface), temperature and tension, are perceived more evenly across all somatosensory surfaces.
Tension is perceived via the stretching of a surface and allows for the perception of slippage. Like other perceptual modalities, 
somatosensation relies more so on the change in detected stimuli than the stimuli itself. For instance, perception of the clothes on one's
skin decays rapidly. Nociception is the perception of pain, and is detected alongside most somatosensory surfaces.</p>
<h4>Chemoreception & Osmoreception</h4>
<p>Chemoreception is the perception of chemical stimuli. Gustation and olfaction are forms of chemoreception detecting the intake of 
chemical compounds. Gustation is the perception of taste for which there exist primary subdivisions of sweetness to detect sugars,
sourness to detect acids, saltiness to detect salts, bitterness to detect toxicity, and savoriness to detect protein. Olfaction is the
perception of smell, which in combination with gustation and somatosensation provides the perception of flavor. We can imagine subdividing
olfaction into primary odors from which complex odors result. These primary odors may include the following, though this is
speculative: floral, fruity, minty, nutty, pungent, putrid, woody, etc. Chemoreception also exists to detect and maintain the
concentration of chemical compounds associated with sleep, thirst, hunger, suffocation, nausea, sexual excitation. etc. Osmoreception is the
perception of the osmotic pressure of the fluids in which these compounds are suspended.</p>
<h4>Emotion</h4>
<p>Perceptual spaces are attributed desirability, and movement across desirability attributed emotion. This is a way of understanding
complex emotions as the product of the composition of primary emotions. Two primary characteristics of perception, valence, i.e. reward
and punishment, and excitation, i.e. action-incentive and satiation-oriented, are combined to form abstract environments for which 
involuntary movement towards and between produces four primary emotions, fear, excitement, sadness and joy.</p>
<p><img src="/Assets/images/primary_emotions.png" width="100%" height="100%"></p>
<p>Additional primary emotions result from voluntary movement across this perceptual space, namely hope, anger, contentment and
playfulness. Further complex emotions can be formed through the combination of these primitives and through their entry into social 
contexts.</p>
<h4>Strategy</h4>
<p>We can imagine a set of distinct strategies, where a strategy is an algorithm mapping perceptual spaces to desired actions. For 
any strategy pair we can distinguish between the set of perceptual spaces for which the desired actions are shared, and the
set of perceptual spaces for which they not. For a strategy set, there exists the set of cooperative and non-cooperative relationships
between strategies, and the non-cooperation between these two strategy sets.</p>
<p><img src="/Assets/images/strategies.png" width="70%" height="70%"></p>
