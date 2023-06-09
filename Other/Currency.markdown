---
layout: default
mode: dark
title: Currency
---
<h3>Currency</h3>
<p>Goods are material things we attribute value. Services are non-material things we attribute value.
When goods and services are exchanged, value is exchanged, and value as the medium of the exchange of goods and services is embodied as currency.
Income is currency received, expense is currency given, asset is stored income, liability is stored expense. This can be visualised with the analogy of a reservoir:
</p><p><img src="../Assets/images/reservoir1.png" width="70%" height="70%"></p>
<p>Properties of the model:
    <ul>
        <li>red and blue liquid annihilate with one another at will (just as sold assets can pay off liabilities).</li>
        <li>liquid evaporates and precipitates to yield larger downstream flow (just as liabilities can produce expenses and assets can produce income).</li>
        <li>inflow of income exceeding inflow of expense yields larger asset to liability ratio (positive change in equity position).</li>
        <li>inflow of expense exceeding inflow of income yields larger liability to asset ratio (negative change in equity position).</li>
    </ul></p>
<p>Shortcomings of the model:
    <ul>
        <li>does not model liability as the product of the one-time inflow of both income and expense.</li>
        <li>does not model how liability is paid off with income generated from sold assets.</li>
        <li>evaporation/precipitation analogy tedious.</li>
        <li>does not scale into a working model of an economy and fails to model more complex financial topics.</li>
    </ul>
</p>
<p>We can think of an economy as a set of agents (individuals and organisations) exchanging goods and services via the medium of currency. Nodes represent agents,
edges represent pathways of exchange (exchange of currency, goods and services).
<img src="../Assets/images/complete_inverted.png" width="50%" height="50%">
Taking any two nodes and the edges that connect them provides the following heuristic:
<img src="../Assets/images/binary_tank_inverted.png" width="100%" height="100%"></p>
<p>Properties of the model:
    <ul>
        <li>represents an agent's physical  environment as a tesselated circle and its financial environment as the cylindrical tank that tesselation projects to.</li>
        <li>each tesselated tile represents a subset of an agent's environment and are color-coded such that environments that are shared by agents have the same color.</li>  
        <li>each tesselated tile sits above a set of white and black orbs representing assets and liabilities respectively.</li>
        <li>change in the spherical volume of an asset or liability is proportional to change in the magnitude of its value. Thus, any subset of an agent's environment is the product of a set of assets and liabilities.</li>
        <li>all assets and liabilities that constitute an agent's environment project to unit values (1 and -1 respectively) as stored in the cylindrical tank above.</li>
        <li>the depth of a unit value in the cylindrical tank is inverse to its liquidity.</li>
        <li>value held in uppermost part of cylinder projects from highly liquid assets: material currency, digital account balance, etc.</li>
        <li>value held in mid-level parts of cylinder project from mildly liquid assets: inventory, accounts receivable, shares, bonds, debenture, etc.</li>
        <li>low-level stacks in cylinder are highliy illiquid: property, motor vehicles, equipment, etc.</li>
        <li>net income/expense is equivalent to the net inflow/outflow of positive value to/from the uppermost part of the cylinder.</li>
        <li>an income statement is documentation of the inflow and outflow of positive value across a given time period.</li>
        <li>a cash flow statement is documentation of the inflow and outflow of positive value pertaining to highly liquid assets across a given time period.</li>
        <li>A balance sheet is documentation of the ratio of assets to liabilities at a given point in time and is the product of the income statement across time.</li> 
        <li>the flow of currency corresponds to the exchange of assets and liabilities.</li>
    </ul></p>
<p>Imagine an economy where agents exchange assets and liabilities with no objective function. In this economy, agents inhabit environments at random, producing assets
and liabilities at random, and exchanging assets and liabilities at random. It is very low likelihood that a random assortment of assets in an environment enables that 
environment to produce value in excess of the value of its constituent parts. As such, the existence of these environments diminishes, and the economy decays towards
oblivion.</p>
<p>Instead we imagine an economy where agents have the objective function of maximising the value of the environment they inhabit. 
Thus, agents exchange assets and liabilities such that their equity position (assets/liabilities) following an exchange is greater than or equal to their equity 
position prior to that exchange. This gives us the following set of possible transactions between two agents:
<img src="../Assets/images/agent_exchange.png" width="50%" height="50%">
(Scenario one) Agent A exchanges a liability valued at $-1 for a liability valued at $-1 with agent B.<br><br>
(Scenario two) Agent B lends an asset valued at $1 to agent A and is owed $1, agent A has an asset valued at $1 and owes $-1.<br><br>
(Scenario three) Agent A lends an asset valued at $1 to agent B and is owed $1, agent B has an asset valued at $1 and owes $-1.<br><br>
(Scenario four) Agent A exchanges an asset valued at $1 for an asset valued at $1 with agent B.</p>
<p>Because the above exchanges can be expressed by a number system (binary) they scale to the exchange of assets and liabilities for all values. These exchanges are based
on perceived values, with the value of an asset in the economy being computed as the average of the purchasing price of that asset by agents in the economy across time.
This produces a standard moving average graph. A market is a subset of an economy, that is the set of all exchanges of a given asset in the economy across time. 
We modify our visualisation as follows:
<img src="../Assets/images/agent_exchange2.png" width="50%" height="50%">
(Scenario one)<br>
Agent A exchanges liability a for liability b, and perceives liability a as being equal to or exceeding liability b in negative value.<br>
Agent B exchanges liability b for liability a, and perceives liability b as being equal to or exceeding liability a in negative value.<br><br>
(Scenario two)<br>
Agent A borrows an asset from agent B, and perceives the value of the asset borrowed as being equal to or in excess of the liability of the money owed.<br>
Agent B lends an asset to agent A, and perceives the value of the money owed as being equal to or in excess of the value of the asset.<br><br>
(Scenario three)<br>
*The inversion of scenario two.<br><br>
(Scenario four)<br>
Agent A exchanges asset a for asset b, and perceives asset b as being equal to or exceeding asset a in positive value.<br>  
Agent B exchanges asset b for asset a, and perceives asset a as being equal to or exceeding asset b in positive value.<br><br>
<img src="../Assets/images/expenses_vs_income_dark.png" width="50%" height="50%"></p>
<p>Profit = Income - Expenses<br>Equity = Total Assets - Total Liabilities<br>ΔEquity = Profit</p>
<p>Profit can be visualised as the difference in the uppermost black line and the blue line, representing income and total expenses respectively.
It can also be visualised as the difference in the net inflow and outflow of positive value to the most liquid portion of our abstract tank.
Equity can be visualised as the difference in shaded blue space to shaded red space if we plot net assets and net liabilities across time and 
color-code each accordingly. We notice that at time interval one, equity equals profit, assuming we are starting from zero. Thus the balance sheet 
is the product of the income statement, change in equity is profit, and equity is the sum of profit across time.
<img src="../Assets/images/income_vs_fixed_expense_dark.png" width="50%" height="50%">
Marginal Propensity to Consume = Variable Expense / Income<br>
Total Expense = Fixed Expense + Variable Expense<br>
FC/TC = FC/(FC + VC)&emsp;&emsp;operating leverage (ratio of fixed expense to variable expense)<br>
High fixed costs + low MPC = High operating leverage = High risk<br>
Low fixed costs + High MPC = Low operating leverage = Low risk<br>
Marginal Cost = ΔCost / ΔQuantity<br>
E[R] = ΣR_iP_i (i=1..n)<br></p>
<p>Plotting income against expense where expense is purely fixed gives us the above graph. We 'pinch' these lines by raising variable expenses, producing 
lower operating leverage and thus lower risk. Higher risk equates to higher profits and losses (shaded blue and red respectively). This can also be
visualised as the quantity of assets purchased in our abstract economy independent of income (fixed cost) and the quantity of illiquid assets sold in our
abstract economy in a proportion to income (variable cost). Imagine a point bouncing around at random on the income line. No matter the risk, after enough
time the profits and losses will balance each other out making for an expected return of zero. This can also be visualised as the fluctuations in the volume
of the orbs representing assets in our abstract economy, caused by fluctuations in their perceived values by agents in the economy. This corresponds to 
flucutation in income and expense as these assets are exchanged.<img src="../Assets/images/complete_inverted.png">
Inflation = (CPI_final - CPI_initial) / CPI_initial<br>
CPI = Cost of Market Basket (current) / Cost of Market Basket (base)<br>
Interest rate = cash rate + risk premium<br>
(1 + Nominal rate of return) = (1 + real rate of return) x (1 + inflation rate)<br>	
Risk-Free Rate of Return = Rate of Return + Risk Premium<br>
GDP = Consumption + Investment + Government Expenditure + Exports - Imports - Inflation<br></p>
<p>Let's again consider our abstract economy, one of production, expenditure and income. Inflation is the rate at which the prices of goods and services in an economy
change. We can perceive this in our heuristic as fluctuating volumes in orbs representing assets and liabilities. Note that if we consider money as an asset as well 
as a currency, then unlike all other assets, its value within the economy does not change, as it is pegged at a certain unit value. Thus high inflation can be 
problematic given that the value of currency does not inflate with it, and thus an agents purchasing power is diminished. Purchasing power is quantity of basic goods 
that can be purchased per unit value of currency.
We have also thus far neglected the fact that exchanges in our abstract economy are not evenly distributed across the complete graph, but instead cluster across
nodes, with exchange density resembling that of a power-law distribution. The set of nodes with highest density of exchange would be those representing government
financial institutions and large investment and commercial banks. The interest rate at which the government lends money impacts the interest rate at which all other
agents lend money. Note that a lender expects compensation for lending to a borrower of higher default risk. This translates either to collateral on the debt, or 
an increased interest rate (termed a risk premium). The interest rate can be visualised in our heuristic as the volume of a black orb in excess of the liability it 
corresponds to at the point it is created. Gross Domestic Product is a metric for the net production of an economy, and can be visualised as the total emergence of
assets from all agent's environments within our abstract economy over a given time period (usually annual). It can be used as a metric of an economy's financial health.
Economic health can also be measured as gdp as a percentage of public debt (government debt to agents within the economy) and/or foreign debt (government debt to agents
external to the economy). Negative change in GDP across two consecutive quarters is indicative of recession.
<img src="../Assets/images/yield_curve_dark.png" width="50%" height="50%">
Fixed interest rate = expected variable interest rate + liquidity premium<br>
Compound interest: interest on principle compounded per time period<br>
A = P(1 + r/n)^nt		final amount, principle amount, interest rate, rate frequency, time periods elapsed<br><br>
Perpetuity: recurring cash flows without end-date<br>
&emsp;PV = C/(r-g)		perpetuity, cash flow, interest rate, growth rate<br><br>
Annuity: recurring cash flows with end-date<br>
&emsp;FV = (C/r)((1+r^n)-1)			future value of annuity, cash flow, rate of return, number of cash flows<br>
&emsp;PV = (C/r)(1-(1+r)^-n)			present value of annuity, cash flow, rate of return, number of cash flows<br>
&emsp;FV = (C/(r-g))((1+r^n)-(1+g)^n)	future value of growing annuity, cash flow, return rate, growth rate<br>
&emsp;PV = (C/(r-g))(1-((1+g)/(1+r))^n)	present value of growing annuity, cash flow, return rate, growth rate<br></p>
<p>We have disucssed the rates of growth and decline in assets and liabilities and visualised such as the expansion or reduction of the volume of the spheres that 
represent them. The above formula are used to formally define this growth. The yield curve shown above plots expected yield of a bond against the bonds maturity.
It shows the market's outlook for future growth, with a positive yield graph anticipating healthy growth, an inverted yield graph anticipating recession, and a flat
yield graph representing uncertainty. The steepness of the curve represents the magnitude of the growth/decline anticipated.
<img src="../Assets/images/efficiency_frontier_dark.png" width="50%" height="50%">
E(x) = Σ x*p(x)		expected value, sum, profit, probability of occurrence <br>
σ^2 = Σ p(x)*(x - E(x))^2		risk, sum, probability of event occuring, profit of event, expected value<br>
r_p = w1 * r1 + w2 * r2<br>
σ_p = √(w1^2 * σ1^2 + w2^2 * σ2^2 + 2*w1*w2*ρ*σ1*σ2)<br>
E(R) = R_f + β(E(R_m)-R_f)<br>
β=Cov(r_i,r_m)/Var(r_m)<br></p>
<p>The above image depicts what is called the efficiency frontier. It is the line representing the set of portfolios that result from optimally balancing risk versus
return using the above covariance equation. Assets to the right of this line do not compensate for higher risk. Assets below this line offer lower returns. Assets 
above or to the left of this line offer greater return versus risk than any market portfolio, however are undiversified in their rarity. We can use the capital asset
pricing model to determine the expected return of these assets.
This model has assumptions contrary to reality. These include the assumption that expected return and standard deviation of an asset follows a normal distribuiton,
the assumption that agents are rational and risk-averse, the assumption that individual agents cannot effect market prices, and the assumption that agents can always
lend and borrow at the risk free rate.
For an investor operating within this graph, they can create a portfolio from a set of assets that exist within this graph, with the aim of making this portfolio
draw as close as possible to a point on the efficiency frontier that suits their risk appetite. The investor can move closer to the y-intercept (the hypothetical
portfolio solely made up of treasury bonds) by taking out low-risk fixed interest assets. The investor can move towards the efficiency frontier by investing in 
equity.</p>
<p>Loss aversion: agents will experience significantly more negative motion when losing an amount of value than when gaining positive value in equal magnitude.<br><br>
Endowment effect: agents have a greater desire to retain what they own than to acquire the same objects when they do not own it.<br><br>
Status-Quo Bias: agents will perceive losses and gains from the reference point of their current environment as opposed to past or future environments.<br><br>
Overconfidence effect: the confidence an agent has in their judgement typically exceeds the accuracy of that judgement.<br><br>
Fading affect bias: memories connoted by negative emotion fade at a greater rate than memories connoted by positive emotion.<br><br>
Saliency bias: high-impact low-probability events are significantly more salient in memory than the set of all low-impact high-probability events.<br><br>
Confirmation bias: agents favor information that strengthens rather than weakens their beliefs.<br><br>
Availability bias: agents perceive that which is easiest to retrieve from memory as that which is most relevant to making predictions.<br><br>
Sunk cost fallacy: agents are reluctant to abandon a strategy they have invested heavily in, even when abandonment is more beneficial.<br><br></p>
<p><img src="../Assets/images/loan_1_light.png" width="100%" height="100%">
In the case of a simple loan, two possible worlds exist, one in which the borrower defaults on their debt, in which case the lender collects collateral and keeps 
interest or principal repayments made thus far. The other world exists as the one in which the borrower fully repays their debt in which case they retain the value
of the initially borrowed asset, and their counterparty retains the value of the principal and interest repayments.
Of course, these assets and liabilities may fluctuate, the former as market perceptions change, the latter as variable interest rates fluctuate. Remember that debt
increases one's leverage, risk, gains and losses. If one borrows to invest, their returns are amplified as there are more gains on more borrowed assets
(visualised as an elongated array of white spheres) and their losses are amplified as the borrowed assets that have lost value can no longer pay off their 
corresponding debt. If the ratio of their borrowed equity to their margin debt falls below a set value (margin requirement) then the issuer of the margin debt collects
collateral. An agent may have a long or a short position when borrowing to invest (taking out margin debt). In a long position, the agent simply holds the equity
bought with the money they've borrowed. In a short position, the borrows the equity itself rather than currency from a counterparty, sells the equity, and buys it 
back at a later date to return to the lender.</p>
<p><img src="../Assets/images/options_futures_light.png" width="100%" height="100%">
A futures contract is a contract between two parties stating that party A will buy/sell a set quantity of a set stock to/from party B at a set date in the future.
An options contract is a contract between two parties stating that party A can buy/sell a set quantity of a set stock to/from party B any time before a set future expiration date. 
A swaps contract is a contract where one party swaps the cash flows associated with an asset/liability for with the cash flow produced by another party's asset or 
liability. This is typically an interest rate swap or a currency swap.
All these contracts are examples of derivatives: tradeable financial assets with values derived from the values of their underlying assets.</p>
<p>The first 'world' in the above diagram shows the case where the agent executes a put option resulting in a loss. Agent B retains both the premium A has payed to hold
the contract, as well as the asset that has appreciated in value. No agent would execute such an option. The agent has no choice but to take on this loss if instead the
contract is a futures contract that has reached expiration. 
The second 'world' shows the case where the agent could execute a put option resulting in a loss. Agent A holds out for a better time to execute, or having reached expiration
of the contract, does not execute at all. This is not an option in the equivalent futures contract; at the expiration date the exchange is made regardless.
The third 'world' shows the case where the agent executes a put option resulting in a gain. Agent A receives the value of the strike price, whilst agent B receives the
premium for holding the contract and the depreciated asset. 
The fourth 'world' shows the case where executing a put option would result in a gain, but the agent is holding out, perhaps anticipating even greater asset growth.
Again, this is not an option in the equivalent futures contract; at the expiration date the exchange is made regardless.</p>
<p>The fifth 'world' shows the case where the agent executes a call option resulting in a gain. Agent B receives the strike price and a premium. Agent A receives the 
appreciated asset.
The sixth 'world' shows the case where the agent could execute a call option resulting in a gain, but does not. They may be waiting for further gains. This is 
not an option in the futures equivalent. 
The seventh 'world' shows the case where the agent executes a call option resulting in a loss. Agent B would receive a strike price exceeding the asset's value as well
as a premium, agent A receives the depreciated asset. No agent would execute such, but might have to on the losing side of the futures equivalent.
The eight 'world' shows the case where the agent could execute a call option resulting in a loss, but holds out, waiting for a better time to execute. If the contract
is expiring, the agent does not execute at all. </p>

