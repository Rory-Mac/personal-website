---
layout: narrow
title: Distributed Systems
---
<h4>Distributed Systems</h4>
<p>An understanding of distributed systems follows from a general understanding of the landscape of technology used to engineer software.
Distributed computation follows from the extension of the monolithic architectural pattern to non-monolithic architectural patterns in system 
design. By system we mean the infrastructure that enables the provision of software services to requesting devices. By monolithic we mean
the absence of distributed computation, i.e. the computation required for each server to serve requesting devices occurs locally, e.g. http
request and response, routing logic, database access, etc. By non-monolothic we mean the presence of distributed computation, i.e. the
computation required for some servers to serve requesting devices occurs remotely or across servers, e.g. load-balanced http servers,
content-delivery networks, distributed databases, etc.</p>
<p><img src="/Assets/images/seng_overview.png" width="100%" height="100%"></p>
<p>Remote computation is invoked via remote procedure calls (RPCs). Unlike a function call, which calls for a procedure to be run on the
host device, an RPC calls for a procedure to be run on a networked device. It is the responsibility of the operating 
system to establish the communication channel between the requesting device and the networked device for the RPC to be queried and answered.
In the discussion of distributed systems, an RPC typically refers to the delegation of the computation of a local query to a networked 
device, though the query might instead be processed by another process on the same device.</p>
<p><img src="/Assets/images/distributed_systems_overview.png" width="100%" height="100%"></p>
<p>Distributed systems sit atop client-to-server and peer-to-peer models, as illustrated above. Consider the leftmost heuristic, which employs the
client-server model. The outermost networked devices are end-users, clustered within local area networks. The internal spheroid cluster
acts as a distributed system, delegating and responding to remote procedure calls made both internally from other servers and externally
from end users. This simplified heuristic can be extended to give a big picture view of the internet. Imagine we replace the edges 
connecting the local area networks to the distributed system with a complex hierarchy of load balancers, routing devices and device 
look-up services that cumulatively act to connect end-users with a service of choice. Then we can imagine a million amoeba like device
clusters offering unique services to end-users as well as one another. Thus, we can conceptualise the internet as a distributed system
whose service offered is itself the connection of systems and users.</p>
<h4>Load Balancing</h4>
<p>Consider that internet traffic routes asynchronously from a client cluster to a server cluster, through a hierarchy of routers maintained
by a hierarchy of internet service providers. At the network edge, client-internet or server-internet, there may exist proxies. Proxies
are servers that manipulate rather than process requests. Forward proxies manipulate requests on the client-side, reverse proxies manipulate
requests on the server-side. The most prominent example of a reverse proxy is that of the load balancer, which reroutes client requests
across application servers to ensure an evenly distributed workload.</p>
<p><img src="/Assets/images/load_balancing.png" width="100%" height="100%"></p>
<p>Load balancing has additional benefits beyond even work distribution. Load balancers can help ensure that the provision of a software
service by a server cluster is fault-tolerant, so that if any one server fails, the load balancer can detect the network failure and 
reroute client requests elsewhere. In the ideal case, the functionality of a server cluster is proportional to the number of working
servers. This is referred to as graceful degradation. If the compute of the server cluster does not meet the processing requirements of 
the average number of client requests, we can scale the cluster vertically (more compute per server) or horizontally (more servers).</p>
<p><img src="/Assets/images/static_load_balancing_methods.png" width="100%" height="100%"></p>
<p>Load balancing methods can be static (computed without regard for server state) or dynamic (computed with regard for server state).
Static methods include round-robin, weighted round-robin and IP-hash. In the round-robin method, the load balancer routes client-requests
to servers by looping through available servers in sequence. Weight round-robin attributes servers with a weight to indicate how many 
client-requests they should be allocated before moving to the next server in sequence. Weighted round-robin allows for the allocation 
of client-requests to servers in proportion to their pre-determined processing capabilities. IP-hash uses hashing to route all 
client-requests from a particular client to a given server, to allow for the establishment of a client-server session.</p>
<p><img src="/Assets/images/dynamic_load_balancing_methods.png" width="100%" height="100%"></p>
<p> Static load-balancing methods have less overhead than their dynamic counterparts, but are likely to be less computationally efficient
by not taking the state of each server into account. Dynamic load balancing methods instead query servers to retrieve aspects of their 
current state, such as resource usage, current connections, or a running average of response times to recent queries. This allows for 
the load balance to balance dynamically with information not known prior to deployment of the system. Real-world load balancers will use
combination of the above algorithms, tailored to the features and requirements of the specific application served by the server cluster.</p>
<p>As an example, consider an ecommerce platform with a product directory, a shopping cart and a checkout function. A load balancer may 
redirect product queries to a server cluster serving product media (text descriptions, product images, pdf product manuals, etc) using 
a weighted round-robin method, while redirecting cart and checkout queries to an independent server cluster using a combination of the IP
hash and least-connection load-balancing methods.</p>
<p>Load-balancing does not just occur on the client-server network edge. For example, network load-balancers are used by internet service
provides to optimally route larger amounts of network traffic across the internet. Global server load balancers may be used to route
application-specific traffic across a distributed system that spans multiple local networks.</p>