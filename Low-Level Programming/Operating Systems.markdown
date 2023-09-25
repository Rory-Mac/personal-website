---
layout: narrow
title: Operating Systems
---
<h4>Operating Systems</h4>
<p>An operating system, simply put, is a process that manages processes on a computer architecture. A process is a runtime instance of a 
stored program. Responsibilites of the operating system include scheduling, providing hardware resources upon request, managing IO, 
privileges, software interrupts, virtual memory, caching and multithreading.</p>
<p><img src="/Assets/images/OS_paging.png" width="100%" height="100%"></p>
<p>The kernel is the core of the operating system that is always resident in memory. The kernel includes a virtual memory manager that 
manages a page table. This is a tabular data structure that maps virtual memory to physical memory like above. The kernel typically also
manages a variety of kernel applications. Examples of kernel applications include device drivers, interrupt handlers, process schedulers,
kernel error detectors, power managers, system call interfaces, etc.</p>
<p><img src="/Assets/images/deadlock0.png" width="90%" height="90%"></p>
<p>Deadlocks occur when a process requires a resource assigned to another process that requires a resource assigned to that process, both are blocked, 
awaiting each other's resources to be freed, in an infinite loop. This scales to any number of process-resource pairs that exist in such a cycle. When 
we refer to resource, we are referring to a system resource. Examples include interrupt request lines, direct memory access channels, input output port 
addresses, memory address ranges, etc.</p>