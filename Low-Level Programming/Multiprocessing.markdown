---
layout: narrow
title: Multiprocessing
---
<h4>Multiprocessing</h4>
<p>Multiprocessing is the simultaneous execution of tasks. Parallelism and concurrency are means of multiprocessing. Parallelism involves
multiple processing cores processing tasks simultaneously, whilst concurrency involves processing cores context switching between multiple
tasks at a fast enough rate to give the impression of simultaneous execution. Execution refers to a processors fetch-decode-execute cycle
by which it processes instructions. The set of sequences of instructions processed by a concurrent processor are referred to as threads,
threads of execution.</p>
<p><img src="/Assets/images/thread_DFA.png" width="50%" height="50%"></p>
<p>A scheduler is a type of system software that schedules the runtime of processes and manages threads of execution between them. Programs are loaded from
non-volatile secondary memory into a 'ready queue' of processes in volatile memory. The scheduler is 
responsible for the above transformations, and will dequeue the process into a running state, and enqueue the process into a blocked state if the process 
is awaiting an I/O resource to become unblocked. When the I/O device responds, the process returns to the ready queue. A process may jump straight from 
running to ready in the case the scheduler picks another process (a timeout), to ensure a desirable time allocation of hardware resources to processes.
A dispatcher is special system software that manages the thread of execution within the process selected to enter runtime by the scheduler. 
This includes the handling of context switches.</p>
<p>Threads have their own stack (local volatile memory space for storing data) and a shared stack (for global versus local variables). This can lead to 
    data races when multiple threads attempt to manipulate the same data registers concurrently.</p>
<p><img src="/Assets/images/critical_section.png" width="50%" height="50%"></p>
<p>A data race occurs when one thread accesses data that another thread is writing to. Thus the returned value of the data is a race between the two threads.
A data race is a type of race condition: undesired code execution resulting from the improper sequencing of operations by concurrent threads.</p>
<p>To avoid race conditions, high-level programming languages usually offer keywords that compile into synchronization primitives.
Synchronization primitives are low-level abstract data types that manage the critical section: the section of code containing resources accessed and 
modified by multiple threads. A lock is an example of a synchronization primitive, and enforces mutual exclusion of a variable or a segment of code, 
meaning that only one thread may access that variable or code segment at any one time. A lock that enforces mutual exclusion may be referred to as a mutex.
Locks may enforce conditional concurrency policies, where a condition has to be met for a thread to access/modify a protected variable or code segment.</p>
<p>Technically, a lock is a binary counting semaphore. A counting semaphore is an abstract data type (and synchronization primitive), represented by the 
state S and operations P and V. The state S represents the number of resources the semaphore manages that are currently available. The wait (P) operation 
decrements this value. If the resulting value is negative, the process invoking the wait operation 'sleeps' and is added to the semaphores 'waiting' or 
'blocked' queue. Else, the process keeps running with access to the resource. A process 'releases' that resource upon completion by invoking the signal (V)
operation which increments this value.</p>