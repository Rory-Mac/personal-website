---
layout: narrow
title: Distributed Systems
---
<h4>Distributed Systems</h4>
<p>In the context of software, we think of a system as the infrastructure enabling the provision of software services to requesting 
devices. This requires computation. In the case of a non-distributed system, the computation is performed by a singular process running 
locally on the end user's host device. In the case of a distributed system, the computation is performed by multiple processes across
multiple devices via remote procedure calls. Unlike a function call, which calls for a procedure to be run on the host device, a remote
procedure call (RPC) calls for a procedure to be run on a networked device. It is the responsibility of the operating system to establish the
communication channel between the requesting device and the networked device for the RPC to be queried and answered. In the discussion of
distributed systems, an RPC typically refers to the delegation of the computation of a local query to a networked device, though the query
might instead be processed by another process on the same device.</p>
<p><img src="/Assets/images/distributed_systems_overview.png" width="100%" height="100%"></p>


