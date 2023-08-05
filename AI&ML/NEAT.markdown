---
layout: default
mode: narrow
title: NEAT
---
<h4>Neuroevolution of Augmenting Topologies</h4>
<p>Neuroevolution of Augmenting Topologies (NEAT for short) is a unique genetic algorithm used to determine the structure of a neural network suited to a given task.
As a genetic algorithm, NEAT takes inspiration from observed biological phenomenon including mutation, crossover, selection, and speciation. Although the name of 
such an algorithm appears intimidating, it is relatively intuitive. 'Neuroevolution' refers to the evolution of the structure of a neural network, whilst 
'augmenting topologies' refers to the changing nature of the set of neural networks used in the genetic algorithm (referred to as the population).</p>
<p>Genetic algorithms involve the encoding of a phenotype through a genotype. With respect to neural networks, the phenotype is the physical structure of the network
itself, whilst the genotype is the encoding of the structure. Consider the following example:
<img src="/Assets/images/NEAT_genome.png" width="100%" height="100%"></p>
<p>The genome exists as a set of genes, stored in two lists: node-genes (encoding nodes) and connection-genes (encoding connections). The information contained within
a node gene includes the node identifier and the node type (input, hidden, output). The information contained within a connection gene includes the input node 
identifier, output node identifier, connection weight, fact of the edge being enabled/disabled (potentially disabled through mutation), and innovation number. The 
innovation number is a unique identifier that helps keep track of the ordering of structural innovations in the network across time and assists with crossover, as 
we will soon discuss.</p>
<p>The evolution of the genotype and thus the phenotype (the network itself) results from mutations. In NEAT, there exist five primary mutations:
<ul>
    <li>Add Node Mutation: an edge from node A to node B is disabled. A new hidden node C is created, with corresponding edges A to C and C to B.</li>
    <li>Add Connection Mutation: a new edge is inserted between two previously unconnected nodes.</li>
    <li>Remove Connection Mutation: an edge is removed between two connected nodes.</li>
    <li>Remove Node Mutation: disable the node-gene for an existing node and disable connections to and from said node.</li>
    <li>Mutate weight: modify the weight of an existing connection.</li>
</ul>
Further mutations exist that can evolve the phenotype across time in different ways, such as node-activation-function mutations.</p>
<p>We now look to the selection component of the genetic algorithm. Imagine we have applied NEAT to a population of one hundred genomes. Each genome has an attached 
fitness value, determined by its performance in the task we wish the genomes to optimally undertake. A hyperparameter termed elitism will dictate how many of the genomes
will be preserved and how many will be discarded. Consider the example where an elitism of two exists for a population of one hundred genomes:
<img src="/Assets/images/NEAT_selection.png" width="100%" height="100%"></p>
<p>The next generation of NEAT agents is then created from the surviving population through a process called 'crossover'. To create offspring from our surviving population
we 'cross over' the genomes of the candidates in question. Again, this is best considered through a visual example:
<img src="/Assets/images/NEAT_crossover.png" width="100%" height="100%"></p>
<p>Innovation numbers allow us to align distinctly evolved genomes. Genes that are shared by both parents are inherited by the offspring. Disabled genes are inherited by 
the offspring, whether in both of the parents genomes or just one. Disjoint genes (that exist in one parent's genome but not the other) are inherited with consideration 
for the parents fitness. Inheritance of excess genes operates the same way (these are disjoint genes with innovation numbers greater than all other genes, indicating that 
they are the most recent genetic innovations).</p>
<p>NEAT takes the process of mutation, selection and crossover a step further by introducing the concept of speciation. In speciation, we use innovation numbers to class
pools of genomes as 'species'. These species compete within themselves, so that our elitism factor preserves a set number of genomes in each genome pool, during 
selection and crossover. This ensures that genomes belonging to a species with poor fitness have the time to evolve into a structure of exceptional fitness. The time
given can be modified by a stagnation parameter, that states that a species will go extinct if the fitness of the best performing genome is stagnant for a given number
of generations.</p>
<p>Newer models exist, including HyperNEAT and CoDeepNEAT, that extend upon the original NEAT algorithm, enabling larger and more complex structures to emerge
through a similar process of neuroevolution. I hope to look into these models in more depth in the future.</p>